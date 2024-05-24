from django.apps import AppConfig

class ProfilesConfig(AppConfig):
    """
    Configuration for the profiles app.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'backend.profiles'

    def ready(self):
        """
        Import signals to ensure they are registered when the app is ready.
        """
        import backend.profiles.signals
