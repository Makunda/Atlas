
from Crypto.PublicKey import RSA
from Crypto.Signature.pkcs1_15 import PKCS115_SigScheme
from Crypto.Hash import SHA256
import binascii

import datetime


# Message must be formatted as ATLAS_INFO$TIMESTAMP:SIGNATURE
rsa_file = "C:\\Users\\hjo\\Documents\\Github\\demeter-web\\atlas-api\\config\\keys\\privateLicense.key"
timestamp = datetime.datetime.now() + datetime.timedelta(weeks=+5)
timestamp = 1695267059
message = b'MASTER_KEY$%d' % timestamp # Forge message
ascii_message = 'MASTER_KEY$%d' % timestamp # Forge message


with open(rsa_file, 'r') as f:
        key = RSA.importKey(f.read())

        hasher = SHA256.new(message)
        signer = PKCS115_SigScheme(key)
        signature = signer.sign(hasher)

        ascii_signature = binascii.hexlify(signature)
        sig = ascii_signature.decode("utf-8")

        complete_key = "%s:%s" % (ascii_message, sig)
        print("New Key : \n%s " % complete_key)
