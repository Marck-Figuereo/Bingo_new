from django.urls import path,include, re_path as url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from django.contrib.auth.decorators import login_required

urlpatterns=[


path('',views.bingo ,name="bingo"),





]