import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal.jsx';

function App() {
  const [modalActive,setModalActive] = useState(false)
  return (
    <div className="App">
      <div className='main'>
        <button className='main__modal-btn' onClick={() => setModalActive(true)}>Открыть модальное окно</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ullam hic. Quam optio nobis sunt id laudantium asperiores quisquam ab deleniti amet aut. Nesciunt, fugiat exercitationem quia minus reprehenderit temporibus?
        Omnis, reiciendis laborum eos odit tempore ratione delectus quidem molestias deleniti sint natus nobis, quisquam et error praesentium culpa doloremque. Quo aliquam ipsum amet et laboriosam. Temporibus dicta libero modi?
        Aut quibusdam ipsum dolorum ea eaque at ad? Minus qui nihil commodi animi temporibus soluta architecto. Fuga odio placeat eaque nihil, voluptates ipsam asperiores maiores ullam, consequuntur, ex iure sapiente!
        In dolorem error praesentium minima incidunt? Dolorem eveniet aspernatur unde. Voluptatum voluptatem obcaecati repellat quisquam? Voluptas mollitia eveniet facere odio laudantium, necessitatibus delectus ab, doloribus cum nisi harum cupiditate dolore.
        Magni adipisci commodi accusantium dolorem cumque illum exercitationem voluptatum unde, recusandae vitae facilis mollitia error at excepturi. Ratione perspiciatis ipsam incidunt voluptatem ut eius harum corrupti quibusdam, cum, itaque hic!
        Rem blanditiis iusto inventore alias autem eligendi praesentium numquam quo tempora, non at neque accusamus, voluptate totam excepturi ratione nesciunt maxime veniam ad. Porro nam, perspiciatis ipsam facere quos saepe.
        Corporis, nulla? Perferendis, qui! Fugiat maxime, vel ipsa alias, in nam aliquid, libero laudantium assumenda distinctio quis molestias quas voluptatibus eligendi necessitatibus possimus. Hic, vitae aut! Voluptatem suscipit sit velit.
        Quae laudantium veritatis expedita deserunt iusto! Quidem, vero nesciunt, vel et deleniti laboriosam delectus consequatur ab a ratione cumque voluptatem velit natus totam explicabo nostrum id dolore quis ut? Illum.
        Totam corporis molestias minus quaerat atque tenetur distinctio sunt architecto debitis, unde ipsa illo maxime expedita provident at, consequatur culpa cumque enim, reprehenderit placeat tempora alias eius in consequuntur! Adipisci.
        Eius voluptates quisquam nemo laudantium repudiandae? Cum aliquid reprehenderit blanditiis maiores! Vel nulla ratione incidunt facilis a ab magni omnis, hic esse autem unde error accusantium neque repellat. Quo, aut.
        Ipsum illo deserunt doloremque iure culpa accusamus laborum amet debitis molestias, excepturi vitae recusandae nesciunt, quam tempora maxime, tempore officiis eum corporis itaque ad quas ducimus. Harum impedit temporibus consequuntur.
        Officia, iure. Doloremque libero dolore ipsa sit sapiente deserunt suscipit ipsum voluptatibus quam cumque! Hic esse aliquid nostrum, quis repellat velit aperiam magnam fugiat numquam, dolore dolores atque dicta dolor.
        Eius, voluptates? Quod necessitatibus autem mollitia magnam quae, eveniet earum iusto! Doloribus minus est impedit vel obcaecati voluptas, quibusdam earum consequatur reprehenderit, inventore esse molestiae perferendis, maiores similique cum recusandae.
        Minus eligendi doloribus quos quasi corrupti eveniet porro saepe in, voluptas et excepturi non! Tempora ullam sapiente velit voluptates, vel fuga amet autem odit debitis est adipisci impedit iure similique.
        Magnam fugit commodi iure enim non vitae blanditiis numquam laboriosam ab, tempora minima rerum iste pariatur dignissimos, dolorum perspiciatis? Quam animi, maiores ullam doloribus architecto aspernatur cum et fugit! Exercitationem.
        Magnam sed dolorem voluptatibus sunt, assumenda minima saepe quae nemo necessitatibus explicabo maxime tempora, ratione possimus. Sapiente, harum ipsa! Quas nisi, rem saepe alias voluptas dolor beatae voluptates repellendus consequatur?
        Veniam facere deleniti ipsam recusandae illum modi vero voluptas perferendis corporis suscipit velit, repellendus minus eligendi temporibus magni in vitae hic harum reiciendis ratione quia. Alias obcaecati quas amet fuga!
        Repellat incidunt, odit facilis tenetur harum vel tempora id quaerat consectetur quis magni quia sequi quo! Cupiditate sequi autem delectus, iusto architecto nam explicabo impedit doloribus dolore dolores possimus minus.
        Accusantium ab, exercitationem sit corrupti dignissimos minus obcaecati iusto commodi? Voluptatem modi ea nostrum libero veniam doloremque, repellat exercitationem dolor possimus numquam, praesentium voluptatibus? Quaerat temporibus sint recusandae ducimus obcaecati!
        Recusandae incidunt cumque nobis itaque nesciunt labore temporibus impedit, magni a consectetur enim earum, omnis nisi! Magni, temporibus. Facere soluta dolorum cupiditate corrupti accusamus voluptates deserunt voluptatem harum, nemo quam.</p>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
        <form className='form'>
                <input type="text" placeholder='какой-то инпут...' className='form_item' />
                <input type="text" placeholder='какой-то инпут...' className='form_item'/>
                <input type="text" placeholder='какой-то инпут...' className='form_item'/>
                <button className='close-modal-btn' type='button'>Нажми меня</button>
            </form>
        </Modal>
    </div>
  );
}

export default App;
