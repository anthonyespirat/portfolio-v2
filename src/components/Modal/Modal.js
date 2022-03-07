import './Modal.css'
const Modal = ({isShowing, toggle, url}) =>  {
    return (
        isShowing
            ?

        <div className="modal-body" onClick={toggle}>
                    <img src={url} alt="" />
        </div>

        :null
    )

}

export default Modal;