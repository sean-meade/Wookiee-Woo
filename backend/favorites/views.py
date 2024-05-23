from django.http import HttpResponse

def test_view():
    return HttpResponse("The matchmaking app is working!")
