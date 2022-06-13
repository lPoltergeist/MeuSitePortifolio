import {Container} from './styles';
import {AiOutlineGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

export function Footer() {
    function handleRedirect(url: string) {
        window.open(url);
    }
;
    function handleScrollTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Container>
            <div className="container">
                <button type="button" onClick={handleScrollTop}>
                    voltar ao topo
                </button>
                <section>
<AiOutlineGithub onClick={() => handleRedirect('https://github.com/lPoltergeist')}/>
<AiFillInstagram onClick={() => handleRedirect('https://www.instagram.com/x.poltergeist/')}/>
<AiFillLinkedin onClick={() => handleRedirect('https://www.linkedin.com/in/gbramone/')}/>
                </section>
            </div>
        </Container>
    )
}