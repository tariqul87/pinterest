from django.db import models

# Create your models here.


class User(models.Model):
    """
    User model
    """

    name = models.TextField(max_length=20)


class Tag(models.Model):
    """
    Tag model
    """

    name = models.TextField(max_length=20, unique=True)


class Pin(models.Model):
    """
    Pin model
    """
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user")
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE, related_name="tag")
    image = models.ImageField(upload_to="pins")
    title = models.TextField(max_length=50)
    description = models.TextField(max_length=500, null=True, blank=True)
    time = models.DateTimeField(auto_now_add=True)


class Bookmark(models.Model):
    """
    BookMark model
    """
    pin = models.ForeignKey(Pin, on_delete=models.CASCADE,
                            related_name="bookmark_pin")
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="bookmarker")

    class Meta:
        unique_together = (('user', 'pin'),)
