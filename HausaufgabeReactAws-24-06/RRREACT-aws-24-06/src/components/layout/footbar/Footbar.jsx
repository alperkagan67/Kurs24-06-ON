import styles from "./Footbar.module.css";
/*1.4 Wir haben heute über das Unterteilen von Komponenten gesprochen. Unser Beispiel bezoig sich dabei auf die Navbar, welche wir als separate Komponente angelegt haben.
Nehmt den content <div> Tag und den <footer> Tag und lagert diesen in eine extra Komponente <aus></aus> || <footer>This is my footer</footer>*/

function Footbar(){
    return (
      <div className={styles.footbar}>
        This is my footer
      </div>
    );
}


export default Footbar;


