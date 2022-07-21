export class RouteService{

    routes = [
        { nome: "Home", route: "home", icon: "mdi-home", use: true, show: true, disabled: false, component: () => import('../../views/Home.vue') },
        { nome: "Geral", route: "geral", icon: "mdi-file", use: true, show: true, disabled: false,
            child: [
                {
                    nome: "Empresa",
                    route: "empresa",
                    icon: "mdi-domain",
                    use: true,
                    show: true,
                    disabled: false,
                    component: () => import('../../views/geral/empresa/Lista.vue')
                }
            ]
        },
        { nome: "Configuração", route: "configuracao", icon: "mdi-cog", use: true, show: true, disabled: false,
            child: [
                {
                    nome: "Usuário",
                    route: "usuario",
                    icon: "mdi-account",
                    use: true,
                    show: true,
                    disabled: false,
                    component: () => import('../../views/geral/usuario/Lista.vue')
                }
            ]
        }
    ]

}
