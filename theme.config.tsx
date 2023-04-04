export default {
    logo: <span>Golang Uzbekistan</span>,
    project: {
        link: 'https://github.com/golang-uz',
    },
    search: {
        emptyResult: (
            <div className="text-center">Hech narsa topilmadi</div>
        ),

        loading: "Qidirilmoqda...",
        placeholder: "Dokumentatsiyadan qidirish",
    },
    editLink: {
        text: "GitHub da o'zgartirish kiritish →",
    },
    feedback: {
        content: "Savollar? Bizga xat qoldiring →",
        labels: "feedback",
    },
    docsRepositoryBase: 'https://github.com/golang-uz',
    sidebar: {
        titleComponent({ title, type }) {
            if (type === "separator") {
                return <span className="cursor-default">{title}</span>;
            }
            return <>{title}</>;
        },
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    footer: {
        text: (
            <div className="w-full text-center">
                💙️ ila ⌨️ yordamida siz uchun!
            </div>
        ),
    },
}


