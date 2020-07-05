import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DockerService {

  constructor(private http: HttpClient) {
  }

  Catalog() {
    // {
    //   repositories: [
    //     "debian"
    //   ]
    // }
    return this.http.get('/v2/_catalog');
  }

  TagsList(image: string) {
    // {
    //   name: "debian",
    //     tags: [
    //   "stretch-slim"
    // ]
    // }
    return this.http.get('/v2/' + image + '/tags/list');
  }

  ImageReferevce(image, referevce: string) {
    // {
    //   "schemaVersion": 1,
    //   "name": "debian",
    //   "tag": "stretch-slim",
    //   "architecture": "amd64",
    //   "fsLayers": [
    //   {
    //     "blobSum": "sha256:a3ed95caeb02ffe68cdd9fd84406680ae93d633cb16422d00e8a7c22955b46d4"
    //   },
    //   {
    //     "blobSum": "sha256:6d28e14ab8c85bf8a4331de0667c27d19ef4092b12531eec0334b5c2a1012668"
    //   }
    // ],
    //   "history": [
    //   {
    //     "v1Compatibility": "{\"architecture\":\"amd64\",\"config\":{\"Hostname\":\"\",\"Domainname\":\"\",\"User\":\"\",\"AttachStdin\":false,\"AttachStdout\":false,\"AttachStderr\":false,\"Tty\":false,\"OpenStdin\":false,\"StdinOnce\":false,\"Env\":[\"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\"],\"Cmd\":[\"bash\"],\"ArgsEscaped\":true,\"Image\":\"sha256:282104c978b605affa3ab3c12d13266adc326791369f151cd8183daf53645e30\",\"Volumes\":null,\"WorkingDir\":\"\",\"Entrypoint\":null,\"OnBuild\":null,\"Labels\":null},\"container\":\"5ceda96eeed958e26668344d7810ea9a76b43ef5d0f3526c9e6b8d72075dbb3d\",\"container_config\":{\"Hostname\":\"5ceda96eeed9\",\"Domainname\":\"\",\"User\":\"\",\"AttachStdin\":false,\"AttachStdout\":false,\"AttachStderr\":false,\"Tty\":false,\"OpenStdin\":false,\"StdinOnce\":false,\"Env\":[\"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\"],\"Cmd\":[\"/bin/sh\",\"-c\",\"#(nop) \",\"CMD [\\\"bash\\\"]\"],\"ArgsEscaped\":true,\"Image\":\"sha256:282104c978b605affa3ab3c12d13266adc326791369f151cd8183daf53645e30\",\"Volumes\":null,\"WorkingDir\":\"\",\"Entrypoint\":null,\"OnBuild\":null,\"Labels\":{}},\"created\":\"2020-02-26T00:41:38.427292227Z\",\"docker_version\":\"18.09.7\",\"id\":\"0980458761516d7ac377ebe7d25d1d4d54a73c78fa13d340d994f39ea992902d\",\"os\":\"linux\",\"parent\":\"942a1ef12cf721cedbc2d6be8db8cb027b71a8783ebbe58e612dd7c6e81b4e90\",\"throwaway\":true}"
    //   },
    //   {
    //     "v1Compatibility": "{\"id\":\"942a1ef12cf721cedbc2d6be8db8cb027b71a8783ebbe58e612dd7c6e81b4e90\",\"created\":\"2020-02-26T00:41:38.14030759Z\",\"container_config\":{\"Cmd\":[\"/bin/sh -c #(nop) ADD file:1256c62f77a54c982fdb2790d682049b2ad64c8466466e846f3d33ad1ed4035d in / \"]}}"
    //   }
    // ],
    //   "signatures": [
    //   {
    //     "header": {
    //       "jwk": {
    //         "crv": "P-256",
    //         "kid": "BVEQ:VZQT:NCWI:XXMD:D5FS:YIHX:D3ZR:N4Y5:ZPVL:KQUM:6RQ5:ITU2",
    //         "kty": "EC",
    //         "x": "KyByt-1r5jdUk4lsvY0JRG-ZbfRMVzsbdgEwjy2gRv0",
    //         "y": "fzwMEPL11x-TdUrXiwjErCpg3gVHTYYX4J1u6UwiR_E"
    //       },
    //       "alg": "ES256"
    //     },
    //     "signature": "zo2INZP9yV8uRiacvuYWJhbQSOF7n1itdIpk2OZvdP_075fZxTcn9wjYQ5EGmpBan5poWCCVWvHIfBjuZiCcQg",
    //     "protected": "eyJmb3JtYXRMZW5ndGgiOjIxMjksImZvcm1hdFRhaWwiOiJDbjAiLCJ0aW1lIjoiMjAyMC0wNy0wNVQxMDoyOTo0MFoifQ"
    //   }
    // ]
    // }
    return this.http.get('/v2/' + image + '/manifests/' + referevce);
  }
  DeleteImageReferevce(image, referevce: string){
    return this.http.delete('/v2/' + image + '/manifests/' + referevce);
  }
}
