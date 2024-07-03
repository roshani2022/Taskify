import React from 'react';
import Modal from 'react-modal'
interface ConfirmModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      ariaHideApp={false}
      className="bg-white p-6 rounded shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-lg font-bold mb-4">Are you sure you want to delete this task?</h2>
      <div className="flex justify-end space-x-4">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={onRequestClose}
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
