from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class TestAPIView(APIView):
    def get(self, request, format=None):
        print('We took a hit!!!')
        return Response({"test": "ok"})

    def post(self, request, format=None):
        print(request.data)
        return Response(request.data, status=status.HTTP_201_CREATED)