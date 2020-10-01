from django.db import models

# Create your models here.


class Animal(models.Model):
    """
    Basis animal database for testing
    """
    name = models.TextField(max_length=10)
    sound = models.TextField(max_length=20)

    def speak(self):
        """
        speak functionality
        """
        return 'The ' + self.name + ' says "' + self.sound + '"'
