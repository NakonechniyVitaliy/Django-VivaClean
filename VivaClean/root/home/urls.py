from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('comment', comment),
    path('portfolio', portfolio),
    path('services', services),
    path('contacts', contacts ),
]
