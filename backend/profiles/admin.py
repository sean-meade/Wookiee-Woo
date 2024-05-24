from django.contrib import admin
from .models import CustomUser, UserProfile

# Register the CustomUser model with the admin site
admin.site.register(CustomUser)

# Register the UserProfile model with the admin site
admin.site.register(UserProfile)
