import Card from './components/Card'

const App = () => {
  const jobOpenings =[
  {
    "brandLogo": "https://logo.clearbit.com/google.com",
    "company": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "payPerHour": "62/hour",
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/meta.com",
    "company": "Meta",
    "datePosted": "10 weeks ago",
    "post": "Frontend Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "payPerHour": "75/hour",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/amazon.com",
    "company": "Amazon",
    "datePosted": "2 weeks ago",
    "post": "Backend Developer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "payPerHour": "55/hour",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/apple.com",
    "company": "Apple",
    "datePosted": "3 days ago",
    "post": "iOS Developer",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "payPerHour": "60/hour",
    "location": "Delhi, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/netflix.com",
    "company": "Netflix",
    "datePosted": "4 weeks ago",
    "post": "Data Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "payPerHour": "85/hour",
    "location": "Los Gatos, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/microsoft.com",
    "company": "Microsoft",
    "datePosted": "1 week ago",
    "post": "Cloud Engineer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "payPerHour": "70/hour",
    "location": "Seattle, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/tesla.com",
    "company": "Tesla",
    "datePosted": "6 days ago",
    "post": "Machine Learning Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "payPerHour": "90/hour",
    "location": "Austin, USA"
  },
  {
    "brandLogo": "https://logo.clearbit.com/ibm.com",
    "company": "IBM",
    "datePosted": "8 days ago",
    "post": "DevOps Engineer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "payPerHour": "52/hour",
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/oracle.com",
    "company": "Oracle",
    "datePosted": "3 weeks ago",
    "post": "Database Administrator",
    "tag1": "Part-time",
    "tag2": "Senior Level",
    "payPerHour": "48/hour",
    "location": "Chennai, India"
  },
  {
    "brandLogo": "https://logo.clearbit.com/adobe.com",
    "company": "Adobe",
    "datePosted": "9 days ago",
    "post": "Full Stack Engineer",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "payPerHour": "58/hour",
    "location": "Noida, India"
  }
];

  return (
    <div className="parent">
      {jobOpenings.map((elem, idx) => (
        <Card
          key={idx}
          company={elem.company}
          location={elem.location}
          date={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.payPerHour}
          logo={elem.brandLogo}
        />
      ))}
    </div>
  )
}

export default App
