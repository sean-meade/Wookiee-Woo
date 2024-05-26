from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import FilmResults
from .serializers import FilmResultsSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def survey_results_create(request):
    """
    Create survey results for the authenticated user.
    """
    serializer = FilmResultsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def survey_results_display(request, user_id):
    """
    Display survey results for the specified user.
    """
    try:
        results = FilmResults.objects.get(user_id=user_id)
        serializer = FilmResultsSerializer(results)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except FilmResults.DoesNotExist:
        return Response({'error': 'Results not found'}, status=status.HTTP_404_NOT_FOUND)
