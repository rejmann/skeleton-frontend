<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

abstract class DefaultController extends AbstractController
{
    /** @param mixed[] $props */
    protected function renderReact(
        string $title,
        string $controller,
        array $props = [],
    ): Response {
        return parent::render(
            view: 'react-page.html.twig',
            parameters: [
                'title' => $title,
                'controller' => $controller,
                'props' => $props,
            ],
        );
    }
}
