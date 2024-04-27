import cherrypy
import random
import string

class HelloWorld(object):
    @cherrypy.expose
    def index(self):
        return "Hello world!"

    @cherrypy.expose
    def generate(self):
        # Generates a random password
        return ''.join(random.sample(string.hexdigits, 8))

if __name__ == '__main__':
    cherrypy.server.socket_host = '0.0.0.0'  # Listen on all network interfaces
    cherrypy.quickstart(HelloWorld())
