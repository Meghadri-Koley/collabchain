exports.contractABI= [
  {
    "anonymous": false,
    "inputs": [],
    "name": "DocumentCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "mentr",
        "type": "address"
      }
    ],
    "name": "ProjectCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "TaskCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "TaskUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "UserAssigned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "UserRemoved",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "tasks",
    "outputs": [
      {
        "internalType": "string",
        "name": "projectId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "status",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "a",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "b",
        "type": "string"
      }
    ],
    "name": "compareStrings",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "projectId",
        "type": "string"
      }
    ],
    "name": "createProject",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "projectId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "taskId",
        "type": "string"
      }
    ],
    "name": "createTask",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "projectId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "taskId",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "assignUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "projectId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "taskId",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "removeUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "taskId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "documentId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "content",
        "type": "string"
      }
    ],
    "name": "createDocument",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "projectId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "taskId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "status",
        "type": "string"
      }
    ],
    "name": "updateTaskStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]