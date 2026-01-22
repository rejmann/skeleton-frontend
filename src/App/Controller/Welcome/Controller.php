<?php

namespace App\Controller\Welcome;

use App\Controller\DefaultController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('welcome', methods: 'GET')]
class Controller extends DefaultController
{
    public function __invoke(): Response
    {
        return $this->renderReact(
            title: 'Welcome',
            controller: 'welcome',
            props: [
                'message' => 'Bem-vindo ao projeto!',
            ],
        );
    }
}
