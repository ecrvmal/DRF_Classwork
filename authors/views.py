from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Author, Biography, Book
from .serializers import AuthorModelSerializer, BiographyModelSerializer, BookModelSerializer
from rest_framework.renderers import AdminRenderer


#
# @api_view(['GET','POST'])
# @renderer_classes([JSONRendered])
# def test(request):
#     ......


class AuthorModelViewSet(ModelViewSet):
    # renderer_classes = [AdminRenderer]

    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer


class BiographyModelViewSet(ModelViewSet):
    queryset = Biography.objects.all()
    serializer_class = BiographyModelSerializer


class BookModelViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer
