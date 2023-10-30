from django.shortcuts import render


def index(request):
    return render(request, 'home/index.html', {
        'title': 'Головна',
        'page': 'index',
        'app': 'home'
    })


def comment(request):
    return render(request, 'home/comment.html', {
        'title': 'Відгуки',
        'page': 'comment',
        'app': 'home'
    })


def portfolio(request):
    return render(request, 'home/portfolio.html', {
        'title': 'Портфоліо',
        'page': 'portfolio',
        'app': 'home'
    })


def services(request):
    return render(request, 'home/services.html', {
        'title': 'Послуги',
        'page': 'services',
        'app': 'home'
    })


def contacts(request):
    return render(request, 'home/contacts.html', {
        'title': 'Контакти',
        'page': 'contacts',
        'app': 'home'
    })
