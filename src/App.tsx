import Intro from './components/Intro'
import Button from './components/Button'

const App = () => {

  const openLink = (url : string) => {window.open(url, '_blank');}

  return (
    <div className = "bg-black text-white">
      <Intro />
      <Button text ="LinkedIn" onClick = {() => openLink("https://ca.linkedin.com/in/nabira-rashid-46338a283")}/>
      <Button text ="Github" onClick = {() => openLink("https://github.com/nabirarashid/")}/>
      <Button text ="STEM From Scratch" onClick = {() => openLink("https://stemfromscratch.wordpress.com/welcome/")}/>
      <Button text ="Blog: Tech Tapestry by Nabira" onClick = {() => openLink("https://techtapestrybynabira.blogspot.com/")}/>
      <Button text ="Non-Profit: Limitless Learning" onClick = {() => openLink("https://limitlesslearningi.wixsite.com/limitless-learning")}/>
      <Button text ="Email" onClick = {() => openLink("nabira.rashidm@gmail.com")} className = "pb-8"/>
    </div>
  )
}

export default App