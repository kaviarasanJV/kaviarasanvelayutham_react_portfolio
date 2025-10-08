import PropTypes from 'prop-types';
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const Table = ({ data }) => {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Organization</th>
          <th>TechStack</th>
          <th>Project</th>
        </tr>
      </thead>
      <tbody>
        {data.map((company) => (
          <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.Organisation}</td>
            <td>{company.TechStack}</td>
            <td>{company.Project}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const MyWork = () => {
  const data = [
    {
      id: 1, Organisation: "Synechron Technologies", TechStack: ` React.js, Redux-Saga, JEST, Typescript, JavaScript, HTML, CSS, Auth0, JwtToke,
Figma Plugin, LEAP library, Bootstrap, JEST, Redux State Management, Formik, Windows
10, Visual Studio 2022,Visual Studio Code, Jenkins, Postman, Github, Jira, Front End, Back
End Technologies, Agile scrum methodologies` , Project: "ENBD"
    },
    {
      id: 2, Organisation: "Mastek", TechStack: ` React.js, Redux-saga, Redux-Thunk,ReduxToolKit-Thunks, JEST, Typescript, JavaScript, HTML, CSS, Auth0,
JwtToke, Figma Plugin, Material UI library, TailwindCSS, Bootstrap, JEST, Redux State
Management, Formik, Windows 10, Visual Studio 2022,Visual Studio Code, Jenkins,
Postman, Github, Jira, Front End Technology, Agile scrum methodologies`, Project: "Morissons(ThirdParty,CNC,Rebates"
    },
    {
      id: 3, Organisation: "CISCO", TechStack: `React.js, Redux, JEST, Typescript, JavaScript, HTML, CSS, Figma Plugin, Mantine& Momentum & Fluent UI library, JEST, Redux
State Management, Windows 10, Visual Studio 2022, Visual Studio Code, Postman, Github, Jira, Front End Technology, Agile scrum methodologies`, Project: "CISCO-Webex"
    },
    {
      id: 4, Organisation: "WIPRO", TechStack: `React.js, JEST, Redux State Management, JavaScript, Typescript, HTML, CSS, SASS, Bootstrap, Windows 10, Visual Studio
2022,Visual Studio Code, postman, Github, Jira, Sourcetree, Bitbucket, Front end technology, JSON, Agile scrum methodologies`, Project: "US Bank Access Online"
    },
    {
      id: 5, Organisation: "Litera Tehnologies", TechStack: `React.js, Redux state Management, JavaScript, Typescript, HTML, CSS, Figma Plugin, Outlook addin, XML, C#, FluentUI, .Net MVC
framework, MVC core, WinForms, WPF, Windows 10, Visual Studio 2022, Visual Studio Code, postman, swagger, Github, Jira, sourcetree,
Bitbucket, Dockerhub, Front end technology, Full stack, Agile scrum methodologies`, Project: "Metadact"
    },
    {
      id: 6, Organisation: "iGlitz Technologies", TechStack: `React.js, Redux State Management,MongoDB, Node.js, Express.js, Jest, JavaScript, Typescript, HTML, CSS, Figma Plugin, Material UI, Fluent UI, Windows 10,
Visual Studio, Front end technology, MongoDB, Node.js, Postman, Agile scrum methodologies`, Project: "Inhouse"
    },
    {
      id: 7, Organisation: "CSC Corps India Ltd", TechStack: `DB2, SQL, C#, XML, HTML, COBOL, XML, XSLT, .Net framework, Windows 7, Z OS 390, Linux, Mainframe, Visual Studio, Oracle
Documaker, RP Documaker Studio, .Net Technology (Windows Forms Application, Web Application) Mainframe Technology`, Project: "Progressive Insurance, XEROX"
    },
  ];
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>{`Work Experience`}</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <Table data={data} />
    </div>
  )
}
Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Organisation: PropTypes.string.isRequired,
      TechStack: PropTypes.string.isRequired,
      Project: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MyWork;