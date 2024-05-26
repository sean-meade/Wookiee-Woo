from django.contrib import admin

# Register your models here.
from .models import FilmResults

# Register the CustomUser model with the admin site
admin.site.register(FilmResults)