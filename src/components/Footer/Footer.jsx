function Footer(props) {
    console.log(props)
    return (
        <footer>
        <h3>{props.title}</h3>
        <p>{props.foot}</p>
      </footer>
    )
}

export default Footer;
