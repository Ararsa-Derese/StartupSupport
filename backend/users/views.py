from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User

from .serializer import RegisterSerializer, UserSerializer, ResourceSerializer, EventSerializer
class RegisterView(APIView):
    def post(self, request):
        data = request.data
        serializer = RegisterSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        user = serializer.create(serializer.validated_data)
        user = UserSerializer(user)
        return Response(user.data, status=status.HTTP_201_CREATED) 
class RetrieveUserView(APIView):
    permissions_classes = [permissions.IsAuthenticated]
    def get(self, request):
        user = UserSerializer(request.user)
        return Response(user.data, status=status.HTTP_200_OK)
class ConnectionListCreateView(APIView):
    permissions_classes = [permissions.IsAuthenticated]
    def get(self, request):
        connections = request.user.connections.all()
        serializer = UserSerializer(connections, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        data = request.data
        user = request.user
        connection = User.objects.get(id=data['id'])
        user.connections.add(connection)
        user.save()
        return Response(status=status.HTTP_201_CREATED)
class ResourceListCreateView(APIView):
    permissions_classes = [permissions.IsAuthenticated]
    def get(self, request):
        resources = request.user.resources.all()
        serializer = ResourceSerializer(resources, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        data = request.data
        data['created_by'] = request.user.id
        serializer = ResourceSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        resource = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
class EventListCreateView(APIView):
    permissions_classes = [permissions.IsAuthenticated]
    def get(self, request):
        events = request.user.events.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        data = request.data
        data['created_by'] = request.user.id
        serializer = EventSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        event = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# class ConnectionListCreateView(generics.ListCreateAPIView):
#     queryset = Connection.objects.all()
#     serializer_class = ConnectionSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def perform_create(self, serializer):
#         serializer.save(user_from=self.request.user)