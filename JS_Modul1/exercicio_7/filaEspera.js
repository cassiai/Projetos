let fila = []
let option = ""


do{
    let pacientes = ""
        for (let i = 0; i < fila.length; i++) {
           pacientes += (i+1) + "º - " + fila[i] + "\n"
        }

        option = prompt ("Pacientes: \n" + pacientes +
        "\n Digite a opção desejada: \n 1 - Cadastrar novo paciente \n 2 - Consultar paciente \n 3 - Sair")
        switch (option) {
            case "1":
               const newPatient = prompt ("Digite o nome do paciente: ")
               fila.push(newPatient)
               break
            case "2":
                const consulted = fila.shift()
                if (consulted){
                alert (`O paciente ${consulted} foi atendido.`)
          }else {alert("não há pacientes")}
                break
            case "3":
                break;
               
}
} while (option !== "3")