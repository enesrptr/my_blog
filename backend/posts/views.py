from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Posts
from .serializers import PostSerializer
from rest_framework import status


@api_view(['GET','POST'])
def postList(request):
    if request.method == "GET":
        posts = Posts.objects.all()
        serializer = PostSerializer(posts,many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = PostSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST','DELETE'])
def postDetail(request, id):
    try:
        post = Posts.objects.get(pk=id)
    except Posts.DoesNotExist:
        return Response({"error":"No matching record found."},status = status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    if request.method == "PUT":
        post = Posts.objects.get(pk=id)
        serializer = PostSerializer(post, data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    
    if request.method == "DELETE":
        post = Posts.objects.get(pk=id)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

