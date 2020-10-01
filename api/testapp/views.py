from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class TestAPIView(APIView):
    """
    Test skeleton project
    """

    def get(self, request, format=None):
        """
        Get default text
        """

        print('We took a hit!!!')
        token = Token.objects.create(request.user)
        return Response({"test": "ok"})

    def post(self, request, format=None):
        """
        Post something
        """

        print(request.data)
        return Response(request.data, status=status.HTTP_201_CREATED)
