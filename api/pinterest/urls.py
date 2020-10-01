from rest_framework.routers import DefaultRouter
from pinterest.views import UserViewSet, TagViewset, PinViewset, BookmarkViewset

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('tags', TagViewset)
router.register('pins', PinViewset)
router.register('bookmarks', BookmarkViewset)

urlpatterns = router.urls
