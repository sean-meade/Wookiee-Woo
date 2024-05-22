from django.http import HttpResponse

def test_view():
    return HttpResponse("The profiles app is working!")
