import React from 'react'

const Modal = ({onSubmit,message}) => {
  return (
    <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Xác nhận
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{message}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button type="button" onClick={onSubmit} className="btn btn-primary" data-bs-dismiss="modal">
                Có
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Modal