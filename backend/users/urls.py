from django.urls import path
from .views import RegisterView, RetrieveUserView, ConnectionListCreateView, ResourceListCreateView, EventListCreateView
urlpatterns = [
     path('register', RegisterView.as_view()),
     path('user', RetrieveUserView.as_view()),
     path('connections', ConnectionListCreateView.as_view(), name='connection-list-create'),
     path('resources', ResourceListCreateView.as_view(), name='resource-list-create'),
     path('events', EventListCreateView.as_view(), name='event-list-create'),
     # path('connections/', ConnectionListCreateView.as_view(), name='connection-list-create'),
]
