const text_qa_pt = `<p>
  Como QA entrei em contato com sistema de banco de dados, onde faziamos o insert para alterar os cenários de testes, além de diversar plataformas de 
  teste, vms, foi também do QA que pela primeira vez tiver contato com o sistema de scrum através de uma plataforma chamada redmine. Nossa função era 
  tentar desestabilizar o código a procura de bugs, organização, listagem de steps para reprodução de bugs, teste automatizados, 
  registro de bugs detalhados para reprodução, e por fim verificação de sprint em quadros tipo scrum (Redmine, Jira, Trello).
</p>`
const text_qa_en = `<p>
    As QA I used a database system, where we made the insert to change the test scenarios, in addition to different platforms of
    test, vms, it was also the QA who for the first time had contact with the scrum system through a platform called redmine. Our role was
    trying to destabilize the code looking for bugs, organization, listing steps to reproduce bugs, automated testing,
    detailed bug logging for playback, and finally sprint checking on scrum boards (Redmine, Jira, Trello).
</p>`
const text_dev_pt = `<p>
  Como desenvolvedora, executei todo o desenvolvimento do projeto dfndr enterprise em reactjs e nodejs requisições e envios de dados para apis da empresa,
  também lidei com refactor, debugs, e correções de bugs tanto em react quanto em outros sistemas, Como angular, html, css, js. Tive contato também com 
  ferramentas com wordpress, wix, e também contato com a linguagem JAVA ao fazer o frontend do aplicativo powerpro para andoird via AndroidStudio. Os projetos 
  eram controlados via gitlab (vertente do github) o que também me trouxe o contato e conhecimneto com a plataforma. Assim como a capacidade de fazer uploads 
  em plataformas com aws, e configurar ambientes com docker.
</p>`
const text_dev_en = `<p>
    As a developer, I performed all the development of the dfndr enterprise project in reactjs and nodejs requests and data submissions to the company's apis,
    I also dealt with refactor, debugs, and bug fixes both in react and other systems, like angular, html, css, js. I also had contact with
    tools with wordpress, wix, and also contact with the JAVA language when doing the frontend of the powerpro application for andoird via AndroidStudio. the projects
    they were controlled via gitlab (a github branch) which also brought me contact and knowledge with the platform. As well as the ability to upload
    on platforms with aws, and configure environments with docker.
</p>`
const text_man_pt = `<p>
  Como gerente além de desenvolver, eu precisava estar atenta e discutir com as equipes de UX e P.O as propostas e necessidade que eram enviadas, demandar 
  e priorizar tarefas via scrum e arrumar soluções para organização e agilização do projeto. Já na parte de gerencia técnica era necessário transmitir 
  e pensar nas necessidades do código, instruir os colaboradores, revisar andamento de sprints e código, e gerenciar todas as obrigações 
  burocráticas dos funcionários.
</p>`
const text_man_en = `<p>
    As a manager, in addition to developing, I needed to be attentive and discuss with the UX and P.O teams the proposals and needs that were sent, demand
    and prioritize tasks via scrum and arrange solutions to organize and streamline the project. In the technical management part, it was necessary to transmit
    and think about code needs, educate contributors, review sprints and code progress, and manage all obligations
    staff bureaucracy.
</p>`



const ExpText = {
    'en-US': [
        {
            key: 0,
            area: 'QA (Quality Assurance)',
            period: 'June 2011 - June 2015',
            text: text_qa_en
        },
        {
            key: 1,
            area: 'Front-end Developer',
            period: 'June 2015 - December 2021',
            text: text_dev_en
        },
        {
            key: 2,
            area: 'Front-end Manager',
            period: 'January 2021 - Today',
            text: text_man_en
        }
    ],
    'pt-BR': [
        {
            key: 0,
            area: 'QA (Analista de Qualidade)',
            period: 'Julho 2011 - Julho 2015',
            text: text_qa_pt
        },
        {
            key: 1,
            area: 'Desenvolvedora Front-end',
            period: 'Junho 2015 - Dezembro 2021',
            text: text_dev_pt
        },
        {
            key: 2,
            area: 'Gerente de Front-end',
            period: 'Janeiro 2021 - Atualmente',
            text: text_man_pt
        }
    ]
}

export default ExpText
