function Footer (){
    return <footer className="page-footer grey darken-1">
     <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" 
      href="https://romusell.github.io/React-shop/" target='_blink' rel="noreferrer">Repo</a>
      </div>
    </div>
  </footer>
 }
 
 export {Footer};