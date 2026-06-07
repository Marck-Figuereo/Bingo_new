import asyncio
from pathlib import Path
import zipfile
import edge_tts
from pydub import AudioSegment
from pydub.effects import normalize


CARPETA_SALIDA = Path("voces_bingo_1_90")
CARPETA_TEMP = Path("temp_voces")

CARPETA_SALIDA.mkdir(exist_ok=True)
CARPETA_TEMP.mkdir(exist_ok=True)


# Prueba primero estas voces.
# La dominicana puede o no estar disponible según el servicio.
VOCES_PREFERIDAS = [
    "es-MX-JorgeNeural",      # México masculino
    "es-MX-DaliaNeural",      # México femenina
    "es-CO-GonzaloNeural",    # Colombia masculino
    "es-CO-SalomeNeural",     # Colombia femenina
    "es-ES-AlvaroNeural",     # España masculino
    "es-ES-ElviraNeural",     # España femenina
    "es-DO-RamonaNeural",     # Dominicana femenina, si está disponible
    "es-DO-EmilioNeural",     # Dominicana masculina, si está disponible
]

# Más lento ayuda a que se entienda mejor.
RATE = "-12%"

# Puedes probar:
# "+0Hz"
# "-2Hz" voz un poco más grave
# "+2Hz" voz un poco más viva
PITCH = "-2Hz"

# Silencio para evitar que navegador corte inicio/final.
SILENCIO_INICIO_MS = 500
SILENCIO_FINAL_MS = 500


NUMEROS = {
    0: 'Bingo!!',
    111: 'Bingo',
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    # 6: "seis",
    # 7: "siete",
    # 8: "ocho",
    # 9: "nueve",
    # 10: "diez",
    # 11: "once",
    # 12: "doce",
    # 13: "trece",
    14: "catorce",
    15: "quince",
    16: "dieciséis",
    17: "diecisiete",
    # 18: "dieciocho",
    # 19: "diecinueve",
    # 20: "veinte",
    # 21: "veintiuno",
    # # 22: "veintidós",
    # 23: "veintitrés",
    # 24: "veinticuatro",
    # 25: "veinticinco",
    # 26: "veintiséis",
    # 27: "veintisiete",
    28: "veintiocho",
    29: "veintinueve",
    30: "treinta",
    31: "treinta y uno",
    32: "treinta y dos",
    # 33: "treinta y tres",
    # 34: "treinta y cuatro",
    # 35: "treinta y cinco",
    # 36: "treinta y seis",
    # 37: "treinta y siete",
    # 38: "treinta y ocho",
    # 39: "treinta y nueve",
    # 40: "cuarenta",
    # 41: "cuarenta y uno",
    # 42: "cuarenta y dos",
    # 43: "cuarenta y tres",
    # 44: "cuarenta y cuatro",
    # 45: "cuarenta y cinco",
    # 46: "cuarenta y seis",
    # 47: "cuarenta y siete",
    # 48: "cuarenta y ocho",
    # 49: "cuarenta y nueve",
    # 50: "cincuenta",
    # 51: "cincuenta y uno",
    # 52: "cincuenta y dos",
    # 53: "cincuenta y tres",
    # 54: "cincuenta y cuatro",
    # 55: "cincuenta y cinco",
    # 56: "cincuenta y seis",
    # 57: "cincuenta y siete",
    # 58: "cincuenta y ocho",
    # 59: "cincuenta y nueve",
    # 60: "sesenta",
    # 61: "sesenta y uno",
    # 62: "sesenta y dos",
    # 63: "sesenta y tres",
    # 64: "sesenta y cuatro",
    # 65: "sesenta y cinco",
    # 66: "sesenta y seis",
    # 67: "sesenta y siete",
    # 68: "sesenta y ocho",
    # 69: "sesenta y nueve",
    # 70: "setenta",
    # 71: "setenta y uno",
    # 72: "setenta y dos",
    # 73: "setenta y tres",
    # 74: "setenta y cuatro",
    # 75: "setenta y cinco",
    # 76: "setenta y seis",
    # 77: "setenta y siete",
    # 78: "setenta y ocho",
    # 79: "setenta y nueve",
    # 80: "ochenta",
    # 81: "ochenta y uno",
    # 82: "ochenta y dos",
    # 83: "ochenta y tres",
    # 84: "ochenta y cuatro",
    # 85: "ochenta y cinco",
    # 86: "ochenta y seis",
    # 87: "ochenta y siete",
    # 88: "ochenta y ocho",
    # 89: "ochenta y nueve",
    # 90: "noventa",
}


async def obtener_voz_disponible():
    voces = await edge_tts.list_voices()
    nombres_disponibles = {voz["ShortName"] for voz in voces}

    for voz in VOCES_PREFERIDAS:
        if voz in nombres_disponibles:
            print(f"Voz seleccionada: {voz}")
            return voz

    print("No apareció ninguna voz preferida. Usando es-MX-JorgeNeural.")
    return "es-MX-JorgeNeural"


async def generar_audio_base(numero, texto, voice):
    archivo_temp = CARPETA_TEMP / f"numero_{numero}_temp.mp3"

    # Más natural y menos cortado que "Número, uno"
    texto_tts = f" {texto}."

    intentos = 5

    for intento in range(1, intentos + 1):
        try:
            communicate = edge_tts.Communicate(
                text=texto_tts,
                voice=voice,
                rate=RATE,
                pitch=PITCH,
            )

            await communicate.save(str(archivo_temp))
            return archivo_temp

        except Exception as e:
            print(f"Error generando numero_{numero}.mp3 intento {intento}/{intentos}: {e}")

            if intento == intentos:
                raise

            # Pausa progresiva: 10s, 20s, 30s...
            await asyncio.sleep(10 * intento)

def procesar_audio(archivo_temp, archivo_final):
    audio = AudioSegment.from_file(archivo_temp, format="mp3")

    # Normaliza volumen para que todos suenen parecidos.
    audio = normalize(audio)

    silencio_inicio = AudioSegment.silent(duration=SILENCIO_INICIO_MS)
    silencio_final = AudioSegment.silent(duration=SILENCIO_FINAL_MS)

    audio_final = silencio_inicio + audio + silencio_final

    audio_final.export(
        archivo_final,
        format="mp3",
        bitrate="192k"
    )


async def generar_todos():
    voice = await obtener_voz_disponible()

    for numero, texto in NUMEROS.items():
        archivo_final = CARPETA_SALIDA / f"numero_{numero}.mp3"

        # Esto hace que continúe desde donde se quedó.
        if archivo_final.exists():
            print(f"Saltando {archivo_final.name}, ya existe.")
            continue

        print(f"Generando {archivo_final.name}: Número {texto}")

        try:
            archivo_temp = await generar_audio_base(numero, texto, voice)
            procesar_audio(archivo_temp, archivo_final)

            # Pausa para no saturar el servicio
            await asyncio.sleep(2.5)

        except Exception as e:
            print(f"No se pudo generar numero_{numero}.mp3")
            print(e)
            print("Vuelve a ejecutar el script y continuará desde donde se quedó.")
            break

    crear_zip()

    print("\nListo o parcialmente listo.")
    print(f"Carpeta: {CARPETA_SALIDA.resolve()}")


def crear_zip():
    zip_path = Path("voces_bingo_1_90.zip")

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for archivo in sorted(CARPETA_SALIDA.glob("*.mp3")):
            zipf.write(archivo, arcname=archivo.name)

    print(f"ZIP creado: {zip_path.resolve()}")


if __name__ == "__main__":
    asyncio.run(generar_todos())