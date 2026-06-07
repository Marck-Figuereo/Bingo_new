from django.shortcuts import render

 

def bingo(request):
    return render(request, "index.html")