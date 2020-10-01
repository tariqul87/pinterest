from django.core.management import call_command


def run():
    call_command('loaddata', 'user.json')
    call_command('loaddata', 'tag.json')
