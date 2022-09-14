'use strict'

class q_nodo {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.coord = [[null, null], [null, null]]
    }
}

class q_tree {
    constructor() {
        this.raiz = null
        this.x_range = [0, 500]
        this.y_range = [0, 500]
    }

    insertar(x, y) {
        if (this.raiz == null) 
            this.raiz = new q_nodo(x, y)
        else
            this.buscar_nodo(this.raiz, x, y)
    }

    buscar_nodo(nodo, x, y) {
        if (nodo.coord[+!(y >= nodo.y)][+(nodo.x <= x)] == null)
            nodo.coord[+!(y >= nodo.y)][+(nodo.x <= x)] = new q_nodo(x, y)
        else
            this.buscar_nodo(nodo.coord[+!(y >= nodo.y)][+(nodo.x <= x)], x, y)
    }

    print() {
        this.print_rec(this.raiz)
    }

    print_rec(nodo, tab_n = 0) {
        if (nodo == null) return;
        let tab_st = ""
        for (let i = 0; i < tab_n; i++)
            tab_st += "\t"
        console.log(tab_st, nodo.x, " - ", nodo.y)
        let contar = 0
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                if (nodo.coord[i][j] == null)
                    contar += 1
            }
        }
        if (contar == 4) return
        console.log(tab_st, "[")
        console.log(tab_st, "\tnoroeste: ")
        this.print_rec(nodo.coord[0][0], tab_n + 1)
        console.log(tab_st, "\tsuroeste: ")
        this.print_rec(nodo.coord[1][0], tab_n + 1)
        console.log(tab_st, "\tnoreste: ")
        this.print_rec(nodo.coord[0][1], tab_n + 1)
        console.log(tab_st, "\tsureste: ")
        this.print_rec(nodo.coord[1][1], tab_n + 1)
        console.log(tab_st, "]")
    }

    print_desmos() {
        this.print_desmos_rec(this.raiz, this.x_range, this.y_range)
    }

    print_desmos_rec(nodo, rango_x, rango_y) {
        if(nodo==null) return

        calculator.setExpression({
            latex: `( ${nodo.x} , ${nodo.y} )`,
            color: Desmos.Colors.RED
        })

        let contar = 0
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                if (nodo.coord[i][j] == null)
                    contar += 1
            }
        }
        if (contar != 4){
            calculator.setExpression({
                latex:`x = ${nodo.x} \\left\\{${rango_y[0]}\\leq y\\leq ${rango_y[1]}\\right\\}`,
                color: Desmos.Colors.BLACK
            })
            calculator.setExpression({
                latex:`y = ${nodo.y} \\left\\{${rango_x[0]}\\leq x\\leq ${rango_x[1]}\\right\\}`,
                color: Desmos.Colors.BLACK
            })
        }

        this.print_desmos_rec(nodo.coord[0][0], [rango_x[0], nodo.x], [nodo.y, rango_y[1]])
        this.print_desmos_rec(nodo.coord[1][0], [rango_x[0], nodo.x], [rango_y[0], nodo.y])
        this.print_desmos_rec(nodo.coord[0][1], [nodo.x, rango_x[1]], [nodo.y, rango_y[1]])
        this.print_desmos_rec(nodo.coord[1][1], [nodo.x, rango_x[1]], [rango_y[0], nodo.y])
    }
}

