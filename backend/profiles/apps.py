from django.apps import AppConfig

class ProfilesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'backend.profiles'

    def ready(self):
        import backend.profiles.signals  
