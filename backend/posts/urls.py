from django.urls import path
from .views import postList, postDetail

urlpatterns = [
    
    path('posts/',postList, name = "post-list"),
    path('posts/<int:id>/', postDetail, name = "post-detail")
]
