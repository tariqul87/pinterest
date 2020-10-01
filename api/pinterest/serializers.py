from rest_framework import serializers
from pinterest.models import User, Tag, Pin, Bookmark
from rest_framework.validators import ValidationError


class UserSerializer(serializers.ModelSerializer):
    """
    User model serializer
    """

    class Meta:
        model = User
        fields = ['id', 'name']


class TagSerializer(serializers.ModelSerializer):
    """
    Tag serializer
    """

    class Meta:
        model = Tag
        fields = ['id', 'name']


class PinCreateSerializer(serializers.ModelSerializer):
    """
    Pin Create serializer
    """

    class Meta:
        model = Pin
        fields = ['id', 'user', 'tag', 'image', 'title', 'description']


class PinGetSerializer(PinCreateSerializer):
    """
    Pin Get Serializer
    """
    user = UserSerializer(read_only=True)
    tag = TagSerializer(read_only=True)

    class Meta:
        model = Pin
        fields = ['id', 'user', 'tag', 'image', 'title', 'description', 'time']


class BookmarkCreateSerializer(serializers.ModelSerializer):
    """
    Create Bookmark serializer
    """

    class Meta:
        model = Bookmark
        fields = ['id', 'pin', 'user']


class BookmarkGetSerializer(serializers.ModelSerializer):
    """
    Get bookmark serializer
    """
    user = UserSerializer(read_only=True)
    pin = PinGetSerializer(read_only=True)

    class Meta:
        model = Bookmark
        fields = ['id', 'pin', 'user']
