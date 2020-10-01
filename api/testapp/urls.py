from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from testapp.views import TestAPIView

urlpatterns = [
    path('test/', TestAPIView.as_view(), name="test")
]

urlpatterns = format_suffix_patterns(urlpatterns)
