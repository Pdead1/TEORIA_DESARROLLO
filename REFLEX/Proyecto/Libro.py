import reflex as rx

class Node:
    def _init_(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def _init_(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next
        return elements

class BookStore:
    def _init_(self):
        self.books = LinkedList()

    def add_book(self, title):
        if title:
            self.books.append(title)

    def get_books(self):
        return self.books.display()

# Definir book_title como una variable reactiva con tipo str
book_title: rx.Var[str] = rx.Var("")  # Usar una variable reactiva de tipo str

book_store = BookStore()

def mostrar_datos():
    libros = book_store.get_books()
    if not libros:
        return "No hay libros en la tienda."
    return "\n".join(libros)



cart = {}
def add_to_cart(book):
    title = book['title']
    # Si el libro ya está en el carrito, aumenta la cantidad
    if title in cart:
        cart[title]['quantity'] += 1
    else:
        cart[title] = {**book, 'quantity': 1}  # Agrega el libro con cantidad 1
    print(f"{book['title']} ha sido agregado al carrito. Cantidad: {cart[title]['quantity']}")

def calculate_total():
    return sum(item['Precio'] * item['quantity'] for item in cart.values())

def process_purchase():
    if not cart:
        print("El carrito está vacío. Agrega libros antes de proceder a la compra.")
        return

    total = calculate_total()
    print(f"Total de la compra: ${total:.2f}")
    
    # Aquí puedes agregar lógica para procesar el pago, enviar un pedido, etc.
    cart.clear()
    print("Compra realizada con éxito.")



@rx.page(route='/fiction', title='F I C C Í O N')
def Ficcion():
    return rx.vstack(
        rx.heading("F I C C Í O N", size='4'),
        rx.text("Aquí encontrarás una variedad de libros de ficción."),
        #1L
        rx.text("CINCO ESQUINAS"),
        rx.image(src="/cinco_esquinas.jpg",width="300px",borde_radius="15px 50px"),
        rx.box(
        "Sinopsis:\nUna novela del Premio Nobel de Literatura Mario Vargas Llosa.\nDETALLES DEL PRODUCTO:\nNombre del autor     Vargas Llosa, Mario \nEditorial	   DEBOLSILLO \nNúmero de Páginas	320\nISBN     9786124346859",
        style={"white-space": "pre-wrap"}),
        rx.button("Comprar",on_click=lambda: add_to_cart({
            "title":"CINCO ESQUINAS",
            "Precio: S/.":58.99
        })),
        #2L
        rx.text("HISTORIA DE MAYTA"),
        rx.image(src="/historia_de_mayta.jpg",width="250px",borde_radius="10px 30px"),
        rx.box(
        "Sinopsis:\n«La Historia de Mayta Es Incomprensible Separada de Su Tiempo y Lugar,\n"
         "Aquellos Años en Que, en América Latina, Se Hizo Religión la Idea, Entre Impacientes,\n Aventureros e Idealistas (Yo Fui uno de Ellos), de que la Libertad y la\n Justicia Se Alcanzarían a Tiros de Fusil. » Mario Vargas Llosa\nDETALLES DEL PRODUCTO:\nNombre del autor     Vargas Llosa, Mario \nEditorial	   DEBOLSILLO \nNúmero de Páginas	392\nISBN     9786124346347",
        style={"white-space": "pre-wrap"}),
        rx.button("Comprar",on_click=lambda: add_to_cart({
            "title":"HISTORIA DE MAYTA",
            "Precio: S/.":120.99
        })),
        #3L
        rx.text("LEJOS DE DONDE"),
        rx.image(src="/Lejos_de_donde.jpg",width="250px",borde_radius="10px 30px"),
        rx.box(
        "Sinopsis:\nLa misteriosa historia de una joven que logró huir del infierno de la segunda guerra mundial. Enero de,\n"
        "1945; finales de la segunda guerra mundial. Una joven, envuelta en un pesado capote militar que\n apenas la protege del frío, huye por territorio polaco y checo; llega a Viena y, desde allí, a Génova,\ndonde la ayudan ciertos amigos. Tres años después, en 1948, ha iniciado una nueva vida en Buenos"
        "Aires. \nNo ha sido fácil, y tiene que trabajar duro para ganarse el sustento; vive en la pensión de Frau\n Dorsch, pero ninguno de los demás huéspedes, en su mayoría emigrantes rumanos y húngaros, sabe\ncómo ella consiguió salir de Europa... Porque esa mujer arrastra un pasado infamante y, muchos años \ndespués, sólo las preguntas inocentes de su hijo Federico, concebido en Buenos Aires\n a finales de ese mismo año \n48, son capaces de impedir que ella lo olvide y entierre de manera definitiva." 
        "\nDETALLES DEL PRODUCTO:Nombre del autor	Cozarinsky, Edgardo\nEditorial	TUSQUETS EDITORES\nAño de edición	2009\nNúmero de Páginas	176\nISBN	9788483831823",
        style={"white-space":"pre-wrap"}),
        rx.button("Comprar",on_click=lambda: add_to_cart({
            "title":"LEJOS DE DONDE",
            "Precio: S/.":90.99
        })),
        #4L
        rx.text("ONE PIECE"),
        rx.image(src="/one_piece.jpg",width="250px",borde_radius="10px 30px"),
        rx.box(
        "Sinopsis:\n«Luffy y sus nakama por fin llegan a Alabasta. Inmediatamente después de arribar, se dirigen rápidamente a una tienda \nen busca de alimento. Ahí los esperaba un personaje misterioso. Por otro lado, ¡Baroque Works empieza a\n movilizarse y la situación empieza a agravarse! ¡Continúa la romántica aventura en busca del “One Piece”!"
        "\nFrases:“Aunque se conviva poco tiempo, puede nacer una amistad verdadera” – Mr. Bon Clay. “En el pasado\n nunca le pude ganar a Ace” – Luffy. “Yo quiero que Barbablanca sea el rey de los piratas” – Ace. “¡¿Hemos estado trabajando\n para un pirata?!” – Mr. Bon Clay.\nDETALLES DEL PRODUCTO:\nEditorial	   PANINI\nISBN     9786075282862",
        style={"white-space": "pre-wrap"}),
         rx.button("Comprar",on_click=lambda: add_to_cart({
            "title":"ONE PIECE",
            "Precio: S/.":84.99
        })),

    )

@rx.page(route='/Romance',title='R O M A N C E')
def Romance():
    return rx.vstack(
        rx.heading("R O M A N C E", size='4'),
        rx.image(src="/banner_romance.jpg"),
        rx.text("LA TEORIA DE KIM"),
        rx.image(src="/teoria_kim.jpg",width="250px",borde_radius="10px 30px"),
        rx.box(
            "Sinnopsis: \n Después de la noche de Halloween, todo el condado Mariposa se ha sumido en la oscuridad. Los culpables: Taylor\nKim y su querido viajero del tiempo, Han Dakho. Ahora, enfrentándose a las consecuencias de sus experimentos,\ndeberán redoblar sus esfuerzos para enviar a Dakho a su año y evitar que el profesor Kim Anzu y los militares lo"
            "encuentren antes de que la cuenta regresiva termine. La batalla por restaurar el orden se convierte en una carrera\ncontra el reloj y la realidad. Pero esta última es volátil y las líneas temporales, inestables. Recuerdos de tiempos\npasados empiezan a hacer colapsar las mentes de Dakho, Taylor, Sean y April, llevándolos a perder la razón. Llega la\nsegunda parte del libro más esperado del año. Bienvenidos al condado Mariposa. Esto es (aún) 1986."
            "DETALLES DE PRODUCTO:\nNombre del autor	Sandoval, Jay\nEditorial    CROSS BOOKS\nAño de edición	2024\nNúmero de Páginas	592\nISBN	9786124414411",
        style={"white-space": "pre-wrap"}),
        
        #2L
        rx.vstack(
            rx.text("ORGULLO Y PREJUICIO", font_weight="bold"),
            rx.image(src="/orgullo_prejuicio.jpg", width="250px", border_radius="10px 30px"),
            rx.box(
                "Sinopsis:\nLa clásica historia de amor entre Elizabeth Bennet y el Sr. Darcy, donde las primeras impresiones y el orgullo juegan un papel fundamental en su relación.",
                "DETALLES DE PRODUCTO:\nAutor: Jane Austen\nEditorial: Penguin Clásicos\nAño de edición: 2002\nNúmero de Páginas: 432\nISBN: 9780141439518",
                style={"white-space": "pre-wrap"}),
            ),

        #3L
        rx.vstack(
            rx.text("BAJO LA MISMA ESTRELLA", font_weight="bold"),
            rx.image(src="/bajo_misma_estrella.jpg", width="250px", border_radius="10px 30px"),
            rx.box(
                "Sinopsis:\nUna historia conmovedora de dos adolescentes con enfermedades terminales que se enamoran y encuentran en el amor un sentido profundo a sus vidas.",
                "DETALLES DE PRODUCTO:\nAutor: John Green\nEditorial: Nube de Tinta\nAño de edición: 2012\nNúmero de Páginas: 304\nISBN: 9788415594017",
                style={"white-space": "pre-wrap"}),
            ),
        #4L
        rx.vstack(
            rx.text("COMO AGUA PARA CHOCOLATE", font_weight="bold"),
            rx.image(src="/agua_para_chocolate.jpg", width="250px", border_radius="10px 30px"),
            rx.box(
                "Sinopsis:\nUna novela que mezcla el realismo mágico con una historia de amor prohibido en el contexto de la Revolución Mexicana.",
                "DETALLES DE PRODUCTO:\nAutor: Laura Esquivel\nEditorial: Debolsillo\nAño de edición: 2009\nNúmero de Páginas: 224\nISBN: 9786073112835",
                style={"white-space": "pre-wrap"}),
            ),
    ),

@rx.page(route='/Fantasia', title='FANTASIA')
def Fantasia():
    return rx.vstack(
        rx.heading("F A N T A S Í A", size="4"),
       
        rx.text("Sumérgete en mundos mágicos y aventuras épicas con nuestros libros de fantasía."),

        rx.hstack(
            #1L
            rx.vstack(
                rx.text("EL HOBBIT", font_weight="bold"),
                rx.image(src="/el_hobbit.jpg", width="250px", border_radius="10px 30px"),
                rx.box(
                    "Sinopsis:\nBilbo Bolsón, un hobbit, se embarca en una aventura inesperada con un grupo de enanos para recuperar un tesoro custodiado por el dragón Smaug.",
                    "DETALLES DE PRODUCTO:\nAutor: J.R.R. Tolkien\nEditorial: Minotauro\nAño de edición: 2008\nNúmero de Páginas: 320\nISBN: 9788445074320",
                    style={"white-space": "pre-wrap"}
                ),
            ),

            #2L
            rx.vstack(
                rx.text("LA NIEVE ES BLANCA", font_weight="bold"),
                rx.image(src="/nieve_blanca.jpg", width="250px", border_radius="10px 30px"),
                rx.box(
                    "Sinopsis:\nUn cuento de hadas moderno que reinterpreta la historia clásica de Blanca Nieves con giros inesperados y un enfoque contemporáneo.",
                    "DETALLES DE PRODUCTO:\nAutor: Patricia C. Wrede\nEditorial: Ediciones B\nAño de edición: 2015\nNúmero de Páginas: 304\nISBN: 9788466651111",
                    style={"white-space": "pre-wrap"}
                ),
            ),

            #3L
            rx.vstack(
                rx.text("CINCUENTA SOMBRAS DE GREY", font_weight="bold"),
                rx.image(src="/cincuenta_sombras.jpg", width="250px", border_radius="10px 30px"),
                rx.box(
                    "Sinopsis:\nUna historia de amor y deseo entre Anastasia Steele y Christian Grey, donde la atracción se mezcla con la exploración de límites.",
                    "DETALLES DE PRODUCTO:\nAutor: E.L. James\nEditorial: Grijalbo\nAño de edición: 2012\nNúmero de Páginas: 514\nISBN: 9786073112897",
                    style={"white-space": "pre-wrap"}
                ),
            ),

            #4L
            rx.vstack(
                rx.text("LAS CRÓNICAS DE NARNIA", font_weight="bold"),
                rx.image(src="/cronicas_narnia.jpg", width="250px", border_radius="10px 30px"),
                rx.box(
                    "Sinopsis:\nCuatro hermanos son transportados a un mundo mágico donde deben luchar contra el mal y ayudar al rey león Aslan a recuperar su trono.",
                    "DETALLES DE PRODUCTO:\nAutor: C.S. Lewis\nEditorial: RBA\nAño de edición: 2013\nNúmero de Páginas: 368\nISBN: 9788490331120",
                    style={"white-space": "pre-wrap"}
                ),
            ),

            spacing="20px",
            align_items="flex-start"
        )
    )


@rx.page(route='/Historia', title='HISTORIA')
def Historia():
    return rx.vstack(
        
        rx.heading("Historia", size="4"),
        rx.text("Explora los eventos que moldearon nuestro mundo a través de nuestros libros de historia."),

        rx.hstack(
            # Libro 1
            rx.vstack(
                rx.text("SAPIENS: DE ANIMALES A DIOSES", font_weight="bold"),
                rx.image(src="/sapiens.jpg", width="250px", border_radius="10px 30px"),
                rx.box(
                    "Sinopsis:\nUn recorrido por la historia de la humanidad, desde la aparición del Homo sapiens hasta el siglo XXI.",
                    "DETALLES DE PRODUCTO:\nAutor: Yuval Noah Harari\nEditorial: Debate\nAño de edición: 2015\nNúmero de Páginas: 512\nISBN: 9788499929265",
                    style={"white-space": "pre-wrap"}
                ),
            ),

            # Libro 2
            rx.vstack(
                rx.text("HISTORIA DE DOS CIUDADES", font_weight="bold"),
                rx.image(src="/historia_dos_ciudades.jpg", width="250px", border_radius="10px 30px"),
                rx.box(
                    "Sinopsis:\nLa historia de amor y sacrificio en el contexto de la Revolución Francesa, entrelazando las vidas de varios personajes.",
                    "DETALLES DE PRODUCTO:\nAutor: Charles Dickens\nEditorial: Alianza Editorial\nAño de edición: 2003\nNúmero de Páginas: 368\nISBN: 9788420668496",
                    style={"white-space": "pre-wrap"}
                ),
            ),

            # Libro 3
            rx.vstack(
                rx.text("LA HISTORIA DEL MUNDO", font_weight="bold"),
                rx.image(src="/historia_mundo.jpg", width="250px", border_radius="10px 30px"),
                rx.box(
                    "Sinopsis:\nUna extensa crónica de los eventos que han dado forma al mundo a lo largo de los siglos, desde la prehistoria hasta la actualidad.",
                    "DETALLES DE PRODUCTO:\nAutor: J.M. Roberts\nEditorial: Crítica\nAño de edición: 2007\nNúmero de Páginas: 928\nISBN: 9788498920887",
                    style={"white-space": "pre-wrap"}
                ),
            ),

            # Libro 4
            rx.vstack(
                rx.text("EL ORIGEN DE LAS ESPECIES", font_weight="bold"),
                rx.image(src="/origen_especies.jpg", width="250px", border_radius="10px 30px"),
                rx.box(
                    "Sinopsis:\nLa obra fundamental de Charles Darwin que expone la teoría de la evolución a través de la selección natural.",
                    "DETALLES DE PRODUCTO:\nAutor: Charles Darwin\nEditorial: Espasa Calpe\nAño de edición: 2006\nNúmero de Páginas: 832\nISBN: 9788467013516",
                    style={"white-space": "pre-wrap"}
                ),
            ),

            spacing="20px",
            align_items="flex-start"
        )
    )








@rx.page(route='/Libro', title='LibrosHub')
def Libro()->rx.Component:
    return rx.fragment(
        
        rx.heading("LIBROS HUB",size="8"),
        rx.image(src="/logo.jpg",width="300px",borde_radius="15px 50px"),
        
        rx.hstack(
            rx.button("Ficcion", on_click=lambda: rx.redirect("/fiction"), style={"margin": "10px", "background-color": "orange", "color": "white"}),
            rx.button("Romance", on_click=lambda: rx.redirect("/Romance"),style={"margin": "10px", "background-color": "orange", "color": "white"} ),
            rx.button("Fantasia", on_click=lambda: rx.redirect("/Fantasia"),style={"margin": "10px", "background-color": "orange", "color": "white"} ),
            rx.button("Historia", on_click=lambda: rx.redirect("/Historia"),style={"margin": "10px", "background-color": "orange", "color": "white"} ),
        ),
        rx.text("Explora nuestras diversas categorías de libros y encuentra tu próxima lectura.", 
                 style={"margin-top": "20px", "font-size": "20px", "font-family": "'Abadi Extra Light', sans-serif"}),
    
        rx.image(src="/promocion.jpg")

    ),

# Definición de las rutas
routes={
    "/": Libro,
    "/fiction":Ficcion,
    "/Romance":Romance,
    "/Fantasia":Fantasia,
    "/Histori":Historia,

}


if __name__ == "__main__":
    rx.run(routes)