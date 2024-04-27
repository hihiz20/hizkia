import cherrypy
import random
import string

class HelloWorld(object):
    @cherrypy.expose
    def index(self):
        return """
          <html>
            <head>
                <link href="/static/css/cherry.css" rel="stylesheet">
            </head>
            <body>
                <form method="get" action="checknumber">
                    <input type="text" value="13" name="number" />
                    <button type="submit">Is it prime?</button>
                </form>
            </body>
          </html>
        """

    @cherrypy.expose
    def generate(self):
        return ''.join(random.sample(string.hexdigits, 8))

    @cherrypy.expose
    def checknumber(self, number=13):
        try:
            number = int(number)
            if number < 2:
                return f"{number} is not prime (less than 2)."
            for i in range(2, int(number ** 0.5) + 1):
                if (number % i) == 0:
                    return f"{number} is not prime."
            return f"{number} is prime."
        except ValueError:
            return "Error: Invalid input. Please provide a valid integer."

if __name__ == '__main__':
    cherrypy.config.update({'/static': {'tools.staticdir.on': True,
                                        'tools.staticdir.dir': '/path/to/your/static'}})
    cherrypy.quickstart(HelloWorld())
