from django.urls import path
from . import views

urlpatterns = [
    path('api/weather/<str:query>', views.get_weather, name='get_weather'),
    path('', views.serve_react_app, name='serve_react_app'),
    path('<path:path>', views.serve_react_app, name='serve_react_app_with_path'),
]
