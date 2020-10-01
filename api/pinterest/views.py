from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from pinterest.models import User, Tag, Pin, Bookmark
from pinterest.serializers import (
    UserSerializer, TagSerializer, PinCreateSerializer, PinGetSerializer, BookmarkCreateSerializer, BookmarkGetSerializer)


class UserViewSet(viewsets.ModelViewSet):
    """
    User viewset
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny, )

    @action(methods=['post'], detail=True, permission_classes=[permissions.AllowAny])
    def bookmarks(self, request, pk):
        """
        Create bookmark for user
        """
        pin = request.data.get('pin', None)

        post_data = {
            "user": pk,
            "pin": pin
        }

        serializer = BookmarkCreateSerializer(data=post_data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class TagViewset(viewsets.ModelViewSet):
    """
    Tag viewset
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = (permissions.AllowAny, )
    search = ('name', )


class PinViewset(viewsets.ModelViewSet):
    """
    Pin viewset
    """

    def get_serializer_class(self):
        if self.request and self.request.method == 'GET':
            return PinGetSerializer
        return PinCreateSerializer

    queryset = Pin.objects.all()
    permission_classes = (permissions.AllowAny, )


class BookmarkViewset(viewsets.ReadOnlyModelViewSet):
    """
    Get all bookmarks
    """

    queryset = Bookmark.objects.all()
    serializer_class = BookmarkGetSerializer
    permission_classes = (permissions.AllowAny, )
