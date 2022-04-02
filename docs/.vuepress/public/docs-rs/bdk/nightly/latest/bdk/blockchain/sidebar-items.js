initSidebarItems({"enum":[["Capability","Capabilities that can be supported by a [`Blockchain`] backend"]],"fn":[["log_progress","Create a new instance of [`LogProgress`]"],["noop_progress","Create a new instance of [`NoopProgress`]"],["progress","Shortcut to create a [`channel`] (pair of [`Sender`] and [`Receiver`]) that can transport [`ProgressData`]"]],"mod":[["any","Runtime-checked blockchain types"],["compact_filters","Compact Filters"],["electrum","Electrum"],["esplora","Esplora"]],"struct":[["EsploraBlockchain","Structure that implements the logic to sync with Esplora"],["LogProgress","Type that implements [`Progress`] and logs at level `INFO` every update received"],["NoopProgress","Type that implements [`Progress`] and drops every update received"]],"trait":[["Blockchain","Trait that defines the actions that must be supported by a blockchain backend"],["ConfigurableBlockchain","Trait for [`Blockchain`] types that can be created given a configuration"],["GetHeight","Trait for getting the current height of the blockchain."],["GetTx","Trait for getting a transaction by txid"],["Progress","Trait for types that can receive and process progress updates during [`WalletSync::wallet_sync`] and [`WalletSync::wallet_setup`]"],["WalletSync","Trait for blockchains that can sync by updating the database directly."]],"type":[["ProgressData","Data sent with a progress update over a [`channel`]"]]});