import React from 'react';
import Modal from 'react-modal';

const DeleteProductModal = ({ isOpen, onRequestClose, onDeleteProduct }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-11/12 md:w-1/3 mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
      <p className="mb-6">Are you sure you want to delete this advert?</p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onRequestClose}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={onDeleteProduct}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteProductModal;
