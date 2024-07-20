# Generate wallet

VSC on its layer 2 supports _ed25519_ compatible wallets. They can be generated in various ways. Below you have the current recommended options.

## Python script

You can run a python script that generates the public/ private key for you. The prerequisites is the pip module _cryptography_ and a local python installation.

1. install pip package `pip install cryptography`

2. run the script

```python
from cryptography.hazmat.primitives.asymmetric import ed25519
from cryptography.hazmat.primitives import serialization
import binascii

# Generate a new Ed25519 private key
private_key = ed25519.Ed25519PrivateKey.generate()

# Get the public key
public_key = private_key.public_key()

# Get the raw bytes of the private key
private_bytes = private_key.private_bytes(
    encoding=serialization.Encoding.Raw,
    format=serialization.PrivateFormat.Raw,
    encryption_algorithm=serialization.NoEncryption()
)

# Get the raw bytes of the public key
public_bytes = public_key.public_bytes(
    encoding=serialization.Encoding.Raw,
    format=serialization.PublicFormat.Raw
)

# Convert to hexadecimal
private_hex = binascii.hexlify(private_bytes).decode('ascii')
public_hex = binascii.hexlify(public_bytes).decode('ascii')

print(f"Private key (hex): {private_hex}")
print(f"Public key (hex): {public_hex}")
```

3. **store the generated credentials in a save place**

```bash
[user] vsc > python3 generate_acc.py
Private key (hex): 02df181c21ef23cca914835e990dffee7ba553a3a8f012d0c493621423e36ab7
Public key (hex): 96a70572868db45828374330e203f8df9fce69aa8456bacf17b06821111daaf9
```